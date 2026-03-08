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
    category_orders={"Skill": df["Skill"].tolist()},
    color_discrete_sequence=px.colors.qualitative.Dark24
)

fig.update_layout(
    title="Grouped Bar Chart of Technical Skills",
    xaxis_tickangle=-45,
    yaxis=dict(
        range=[0, 10],
        title="Skill Level (1–10)",
        gridcolor='gray',
        color='white'
    ),
    xaxis=dict(
        title=None,
        tickfont_color='white',
        gridcolor='gray',
        color='white'
    ),
    plot_bgcolor='#1e1e1e',
    paper_bgcolor='black',
    font=dict(color='white'),
    bargap=0.15,          # Smaller gap between groups
    bargroupgap=0.15,     # Smaller gap within groups
    legend=dict(
        font=dict(color='white')
    )
)


base_dir = Path(__file__).resolve().parent.parent  # Root DIR
output_path = base_dir / "pages/graph_chart.html"

fig.write_html(output_path)
