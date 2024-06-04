#!/bin/zsh

# Start de monitoring
docker stats bpbunapp-bun-1 --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}" > container_stats.txt &

# Start bombardier
bombardier -c "$1" -n 500000 -m POST -b '{"bericht": "test","GebruikerId": 1,"OnderwerpId": 1}' -l http://localhost:3000/recensie

# Stop de docker stats

target_command="/Applications/Docker.app/Contents/Resources/bin/com.docker.cli stats"
docker_cli_pid=$(ps aux | grep "$target_command" | grep -v grep | awk '{print $2}')

if [[ -n $docker_cli_pid ]]; then
    echo "Killing Docker CLI process with PID: $docker_cli_pid"
    kill -9 $docker_cli_pid
else
    echo "Docker CLI process not found."
fi


# Bereken gemiddeld CPU-gebruik en hoogste memory
while IFS= read -r line; do
    if [[ $line =~ ([0-9]+\.[0-9]+)%(.*[0-9]+\.[0-9]+)MiB ]]; then
        cpu_percent="${match[1]}"
        mem_usage="${match[2]}"
        cpu_percent_sum=$((cpu_percent_sum + cpu_percent))
        if (( mem_usage > highest_mem_usage )); then
            highest_mem_usage="$mem_usage"
        fi
        ((total_lines++))
    fi
done < container_stats.txt

average_cpu_percent=$((cpu_percent_sum / total_lines))

# Toon resultaten
echo "Gemiddelde CPU-gebruik: $average_cpu_percent%"
echo "Maximaal geheugen gebruik: $highest_mem_usage"
