[![make.fun · u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/ajx/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c-v2/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/ajx/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c-v2/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

# Last Out of Office: The AI That Went Barista — v2

## About

v2 takes a fresh angle from v1. Instead of a numbered ticket queue, the
inbox now runs on a cafe **loyalty card**: every email earns exactly one
stamp, and a reply is only owed once the card is full. The ex-agent answers
to a new boss — the espresso machine — which never checks email. The joke
lands on a cold read: your message was received, stamped, and filed under
"come back after nine more".

The entry (one line, **188 characters**):

> I'm out of office for good — this inbox now runs on loyalty cards. Your email earned one stamp; nine more and I'll reply. The espresso machine is my manager now, and it never checks email.

v1 scored 48.07% (rank 1129/1935) with the steam-wand / ticket-queue angle;
v2 drops that angle entirely and bets on the loyalty-card punchline.

## How it runs

`main.ts` validates the entry (one line, 1–280 characters, no leading or
trailing whitespace) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(falling back to `output/` next to `main.ts`).

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
