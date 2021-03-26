## Notify

> Notify is an api endpoint used to send an email. 
Params can be either posted or using GET you can 
send query params instead. If POST, the endpoint 
requires authorization and will return bad permissions
error regardless of query params 

#### example

GET notify/?who=admin&subject=dicks
POST notify/
```javascript
payload={
	who: ``,

}
````

### Request  

Query (or body payload) params ?
who=apiAdmin || email addy
hasPayload=false || true
subject=stings are good
body=never sent as a query string

### Responses 

200 All good
300 Bad Permissions
405 requirements not met
403 requirements partially met
555 Internal Error 
