# This is the Source Code for [my Portfolio Website](https://alexanderlindholm.net)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Website Preview

```sh
npx live-server
```

## File Structure

| Folder       | Purpose            |
| ------------ | ------------------ |
| `content/`   | website text       |
| `templates/` | HTML structure     |
| `pages/`     | final pages        |
| `assets/`    | static files       |
| `scripts/`   | generation tooling |

## Frontend Development Setup

Install all frontend tools with a single command:

```sh
npm install
```

This will install all dependencies defined in package.json, including:

- ESLint - For JavaScript linting
- Prettier - For code formatting
- Stylelint - For CSS linting
- HTMLHint - For HTML validation

### 🧪 Running Linters

```sh
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

```sh
uv venv
source .venv/bin/activate
```

## Running Python Code

```sh
uv pip install .[grafs]
```

```sh
python <name>.py
```

## Linting Python Code

```sh
uv pip install .[linting]
```

```sh
flake8 src/
```

## Pre-Commit Setup

Update the version (rev) of the repositories specified in `.pre-commit-config.yaml` file.

Fetches the latest versions directly from the repositories listed under the repos section.

```sh
pre-commit autoupdate
```

Install the updated hooks into your Git repository.

Running pre-commit install ensures that the hooks are actually installed into your Git repository's `hooks` directory.

```sh
pre-commit install
```

## Git Tag

Pull the latest changes

```sh
git pull origin main
```

Create a new tag pointing to the latest commit

```sh
git tag -a v0.1.5 -m "Version 0.1.5"
```

Push the tag

```sh
git push origin v0.1.5
```

Delete tag from local repository

```sh
git tag -d v0.1.5
```

Delete the tag remotely

```sh
git push origin --delete v0.1.5
```

Check git tags

```sh
git tag
```
