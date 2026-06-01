import os

for week in range(1, 5):
    week_folder = f"Week_{week}"
    os.makedirs(week_folder, exist_ok=True)

    for day in range(1, 6):
        os.makedirs(os.path.join(week_folder, f"Day_{day}"), exist_ok=True)

    os.makedirs(os.path.join(week_folder, "OOPS"), exist_ok=True)

print("Folders created successfully!")