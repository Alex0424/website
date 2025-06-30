import plotly.express as px
import pandas as pd
from pathlib import Path

df = pd.DataFrame(dict(
    r=[10, 8, 7, 6, 8, 9],
    theta=[
        'Linux',
        'Cloud',
        'Network',
        'Security',
        'Programming',
        'Automation',
    ]
))

fig = px.line_polar(df, r='r', theta='theta', line_close=True)
fig.update_traces(fill='toself', line_color='cyan')  # Line color

# Apply dark theme layout
fig.update_layout(
    plot_bgcolor='black',
    paper_bgcolor='black',
    font_color='white',
    polar=dict(
        bgcolor='black',
        radialaxis=dict(
            showline=True,
            linewidth=1,
            linecolor='white',
            gridcolor='gray',
            tickfont_color='white'
        ),
        angularaxis=dict(
            linecolor='white',
            gridcolor='gray',
            tickfont_color='white'
        )
    )
)

base_dir = Path(__file__).resolve().parent.parent  # Root DIR

# Save PNG
output_path = base_dir / "assets/images/spider_chart.png"
fig.write_image(output_path)

# Save HTML
output_path = base_dir / "pages/spider_chart.html"
fig.write_html(output_path)
