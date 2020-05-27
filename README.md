# write-csv-file-action

> GitHub Action to create or append to a .csv file

## Usage

```yml
Name: Add row to data.csv
on:
  schedule:
    # https://crontab.guru/every-day
    - cron: 0 0 * * *
jobs:
  logOctokitStats:
    runs-on: ubuntu-latest
    steps:
      - name: checkout main branch
        uses: actions/checkout@v2
      - uses: gr2m/write-csv-file-action@v1.x
        with:
          path: data/stats.csv
          columns: Column 1, Column 2, etc
          "Column 1": 1
          "Column 2": 2
          etc: 3
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## License

[ISC](LICENSE.md)
