React Docker deployment exemple

Pour reproduire ce déploiement dans votre projet Symfony :
1. Créer un fichier Dockerfile

2. 
```bash
npm run build
```

2. Créer une image de votre projet
```bash
docker build . -t <nom_utilisateur_dockerhub>/react-deployment
```

3. Héberger l'image sur dockerhub
```bash
docker login
docker push <nom_utilisateur_dockerhub>/react-deployment
```

Adapter le projet avec votre version de Node
