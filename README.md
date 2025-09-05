# forgejo-CreateComment

A Github Action to create comments on your forgejo instance via API.

## Usage/Examples

Add ```FORGEJO_API_URL``` to your repo vars and ```FORGEJO_TOKEN``` to your repo secrets.

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - name: Run Forgejo API Action
        uses: timherrm/forgejo-CreateComment@v1
        with:
          api_url: ${{ vars.FORGEJO_API_URL }}
          token: ${{ secrets.FORGEJO_TOKEN }}
          repository: "owner/repo"
          index: 123
          body: "This is my comment"  #optional
          #debug: true                #optional

```

## Inputs/Outputs

see [action.yml](action.yml)

## Local testing with act

Clone the project

```bash
  git clone https://github.com/timherrm/forgejo-CreateComment
```

Go to the project directory

```bash
  cd forgejo-CreateComment
```

Run

```bash
  brew install act node
  npm install @actions/core @actions/github axios @vercel/ncc
  npm init -y
  ncc build src/main.js -o dist
  act --var-file .variables
```

## Resources

[https://forgejo.your.host/api/swagger](https://forgejo.your.host/api/swagger)

[https://forgejo.your.host/swagger.v1.json](https://forgejo.your.host/swagger.v1.json)

## Authors

- [@timherrm](https://www.github.com/timherrm)
