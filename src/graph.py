import plotly.express as px
import pandas as pd
from pathlib import Path

# Skill data (replace with your real values)
skills_data = {
    "Programming": {"Python": 8, "BASH": 7},
    "Version Control": {"Git": 8},
    "Automation": {"CI/CD": 9, "Terraform": 8, "Ansible": 10},
    "Frontend": {"HTML/CSS": 10, "JavaScript": 6},
    "Backend": {"FastAPI": 10, "OOP": 7, "TDD": 8},
    "Networking": {"Firewall": 10, "OSI Model": 7},
    "Databases": {"MySQL": 7, "PostgreSQL": 6},
    "IT Operations": {
        "Installation": 9,
        "Troubleshooting": 6,
        "Network Admin": 7,
        "Support": 6,
        },
    "Linux": {"General Usage": 9},
    "Cloud Computing": {"AWS": 8, "Azure": 8, "OpenStack": 7},
    "Monitoring": {"Prometheus": 7, "Grafana": 7},
    "Containerization": {"Docker/Podman": 8},
    "Orchestration": {"Kubernetes": 6, "Docker Swarm": 5}
}

# Flatten into DataFrame
data = []
for category, skills in skills_data.items():
    for skill, rating in skills.items():
        data.append({"Category": category, "Skill": skill, "Rating": rating})

df = pd.DataFrame(data)

# Plot with Plotly
fig = px.bar(
    df,
    x="Skill",
    y="Rating",
    color="Category",
    barmode="group",
    title="Grouped Bar Chart of Technical Skills",
    category_orders={"Skill": df["Skill"].tolist()}
)

fig.update_layout(
    xaxis_tickangle=-45,
    yaxis=dict(range=[0, 10]),
    xaxis_title=None,
    yaxis_title="Skill Level (1–10)",
    bargap=0.3
)

base_dir = Path(__file__).resolve().parent.parent  # Root DIR
output_path = base_dir / "pages/graph_chart.html"

fig.write_html(output_path)
