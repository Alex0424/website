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
fig.update_traces(fill='toself', line_color='#1379ff')

# Apply dark theme layout
fig.update_layout(
    plot_bgcolor='rgba(0,0,0,0)',  # Transparent
    paper_bgcolor='rgba(0,0,0,0)',
    font_color='white',
    polar=dict(
        bgcolor='rgba(0,0,0,0)',
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
fig.write_image(output_path, format="png", scale=2)

# # Save HTML
# output_path = base_dir / "pages/spider_chart.html"
# fig.write_html(output_path)
