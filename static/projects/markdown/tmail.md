I originally wanted to make my own temporary mail server similar to [10 Minute Mail](https://10minutemail.com/).
I found an SMTP package for GO that made it super easy to spin up a mail server with an API to retrieve emails.
I never ended up building a UI around this, but it's as simple as setting up some MX records and running
the executable.

```
All mail:
http://host:8090/api/mail

Specific mail:
http://host:8090/api/mail?to=<address>

```
