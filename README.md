# Number to words SV

## Todo

The system should display the following message: "Du har angett `<input>`, är det korrekt?" ✅

Then, when a user enters a revenue amount, a written-out version should be displayed based on these rules:

- 0 – 999,999: Display the full amount in words (e.g., “hundratusen kr”) (one hundred thousand). ✅
- 1,000,000 – 999,999,999: Display a mix of digits and words (e.g., “10 miljoner kr”).

Finally, it should round millions:

- Non-round millions (e.g., 1,340,054): Round to one decimal place in millions with "ca" (e.g., “ca 1,3 miljoner kr”).
