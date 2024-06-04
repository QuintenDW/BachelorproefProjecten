# Bachelorproef Quinten De Wolf
Deze repo bevat het QuickSort algoritm, de applicatie in Node.js en de applicatie in Bun. Deze 3 projecten zijn onderverdeeld in 3 mappen.
Er zijn telkens docker files waarvoor een image kan gemaakt worden met het docker build commando. Deze kunnen dan worden uitgevoerd met het docker run commando.
## Algorithm
Deze map bevat het QuickSort algoritme.
Er zijn 3 docker files:
- Dockerfile.hyperfine = Zal de uitvoeringstijd voor zowel Bun als Node.js meten
- Dockerfile.time.bun = Zal het middelengebruik bij Bun meten
- Dockerfile.time.node = Zal het middelengebruik bij Node.js meten

## BPBunApp
Deze map bevat de recensie applicatie in Bun. Voor de installatietijd te meten voor zowel Bun als Node.js kan de volgende dockerfile gebruikt worden: Dockerfile.install.
Voor de andere metingen moet eerst de server worden opgestart via docker-compose. Hierbij zijn er 2 files:
- docker-composemysql.yml = Dit zal de server opstarten met achterliggend een MySQL databank
- docker-composepostgres.yml = Dit zal de server opstarten met achterliggend een PostgreSQL databank

Eens dat deze zijn opgestart kunnen de metingen voor het aantal verzoeken per seconde, de gemiddelde latentie, het maximale geheugengebruik en het gemiddeld CPU-gebruik worden uitgevoerd met behulp van de zsh scripts.
Bij beide scripts kan het aantal connecties worden meegegeven als argument.
- bombardierget.zsh = Zal de metingen uitvoeren bij het ophalen van de data
- bombardierpost.zsh = Zal de metingen uitvoeren bij het invoegen van data

Voor deze scripts te laten werken moeten bombardier en GO geïnstalleerd zijn.
Hierbij moet de PATH variabele goed ingesteld zijn:
```export GOPATH=$HOME/gocode  export PATH=$PATH:$GOPATH/bin ```



Voorbeeld: ```./bombardierget.zsh 10```

## BPNodeApp
Deze map bevat de recensie applicatie in Node.js. Voor de installatietijd te meten voor zowel Bun als Node.js kan de volgende dockerfile gebruikt worden: Dockerfile.install.
Dit bevat dezelfde packages als BPBunApp.
Voor de andere metingen moet eerst de server worden opgestart via docker-compose. Hierbij zijn er 2 files:
- docker-composemysql.yml = Dit zal de server opstarten met achterliggend een MySQL databank
- docker-composepostgres.yml = Dit zal de server opstarten met achterliggend een PostgreSQL databank

Eens dat deze zijn opgestart kunnen de metingen voor het aantal verzoeken per seconde, de gemiddelde latentie, het maximale geheugengebruik en het gemiddeld CPU-gebruik worden uitgevoerd met behulp van de zsh scripts.
Bij beide scripts kan het aantal connecties worden meegegeven als argument.
- bombardierget.zsh = Zal de metingen uitvoeren bij het ophalen van de data
- bombardierpost.zsh = Zal de metingen uitvoeren bij het invoegen van data

Voor deze scripts te laten werken moeten bombardier en GO geïnstalleerd zijn.
Hierbij moet de PATH variabele goed ingesteld zijn:
```export GOPATH=$HOME/gocode  export PATH=$PATH:$GOPATH/bin ```

Voorbeeld: ```./bombardierget.zsh 10```


