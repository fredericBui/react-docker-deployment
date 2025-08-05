React Docker deployment exemple

Pour reproduire ce déploiement dans votre projet Symfony :
1. Créer un fichier Dockerfile

2. 
```bash
npm run build
```

2. Créer une image de votre projet
```bash
docker build . -t react-deployment-example
```

3. Héberger l'image sur dockerhub
```bash
docker login
docker tag react-deployment-example <nom_utilisateur_dockerhub>/react-deployment-example
docker push <nom_utilisateur_dockerhub>/react-deployment-example
```

Adapter le projet avec votre version de Node
