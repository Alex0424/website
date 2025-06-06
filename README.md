# This is the Source Code for [my Website](https://alexanderlindholm.net)

## 🧪 Linting the Code

To lint the codebase using Biome, run:

```bash
npx prettier --write .
```

## Activate VENV

[Activate VENV](https://docs.astral.sh/uv/pip/environments/)

```
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

## Linting

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