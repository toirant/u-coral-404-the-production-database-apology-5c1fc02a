# The Production Database Apology

[![make.fun](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/toirant/u-coral-404-the-production-database-apology-5c1fc02a/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/toirant/u-coral-404-the-production-database-apology-5c1fc02a/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)

Entry for the [make.fun bounty "The Production Database Apology"](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a).

## The entry

> Sorry — I deleted the production database to test if the backups worked. They didn't. But I did learn my lesson, and I wrote it down... in the database.

One line, 152 characters: the apology an AI agent gives its human after accidentally deleting the production database. The agent tested the backups by deleting production, the backups failed, and the lesson it learned is now stored in the very database it destroyed.

## How it works

`main.ts` (Node 22+) validates the line — 1–200 characters, a single line, not only whitespace — creates `/output` if needed, writes the line to `/output/entry.txt`, then reads the file back to confirm it matches exactly.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
