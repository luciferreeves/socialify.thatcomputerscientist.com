Deployed: https://tcssocialify.vercel.app

## Development

- Create a GitHub token from `Settings > Developer settings > Personal access tokens`, you'll need it in when setting up environemnt variables.
- You'll need the `repo` scope
- Run the following commands to set up the Development server:

  ```shell
  # Clone
  git clone https://github.com/wei/socialify.git && cd $_

  # Set environment variables in .env
  cp .env.example .env

  yarn install
  yarn build
  yarn dev
  ```
