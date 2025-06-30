# This is the Source Code for [my Website](https://alexanderlindholm.net)

## Frontend Development Setup

Install all frontend tools with a single command:

```bash
npm install
```

This will install all dependencies defined in package.json, including:

- ESLint - For JavaScript linting
- Prettier - For code formatting
- Stylelint - For CSS linting
- HTMLHint - For HTML validation

### 🧪 Running Linters

```bash
# Format code with Prettier
npm run format

# Lint JavaScript
npm run lint:js

# Lint CSS
npm run lint:css

# Lint HTML
npm run lint:html

# Run all linters
npm run lint
```

## Activate VENV

[Activate VENV](https://docs.astral.sh/uv/pip/environments/)

```bash
uv venv
source .venv/bin/activate
```

## Running Python Code

```
uv pip install .[grafs]
```

```
python <name>.py
```

## Linting Python Code

```
uv pip install .[linting]
```

```
flake8 src/
```

## Pre-Commit Setup

Update the version (rev) of the repositories specified in `.pre-commit-config.yaml` file.

Fetches the latest versions directly from the repositories listed under the repos section.

```
pre-commit autoupdate
```

Install the updated hooks into your Git repository.

Running pre-commit install ensures that the hooks are actually installed into your Git repository's `hooks` directory.

```
pre-commit install
```

## Git Tag

Pull the latest changes

```
git pull origin main
```

Create a new tag pointing to the latest commit

```
git tag -a v0.1.5 -m "Version 0.1.5"
```

Push the tag

```
git push origin v0.1.5
```

Delete tag from local repository

```
git tag -d v0.1.5
```

Delete the tag remotely

```
git push origin --delete v0.1.5
```

Check git tags

```
git tag
```
