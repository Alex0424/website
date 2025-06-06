import plotly.express as px
import pandas as pd
from pathlib import Path

df = pd.DataFrame(dict(
    r=[9, 8, 7, 6, 10, 9, 2],
    theta=[
        'Linux',
        'Cloud',
        'Network',
        'Security',
        'Programming',
        'CI/CD',
        'Windows',
        ]
))
fig = px.line_polar(df, r='r', theta='theta', line_close=True)
fig.update_traces(fill='toself')

fig.update_layout(
    plot_bgcolor='rgba(0,0,0,0)',
    paper_bgcolor='rgba(0,0,0,0)'
)

base_dir = Path(__file__).resolve().parent.parent  # Root DIR
output_path = base_dir / "assets/images/spider_chart.png"

fig.write_image(output_path)
