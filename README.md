Object Fields:
name: text field
priority: high, medium, low
type: experience, accomplishment
category: educational, family, career, personal, other
completed: boolean

Model:
BucketList

Views:
FormView
ItemView
GridView

Routes:
index - GET
create - POST
update - PUT
delete - DELETE

Channels:
data loaded:
- "BucketList:data-loaded"
- published by BucketList
- subscribed to by GridView, FormView

create button has been clicked:
- "FormView:item-created"
- published by FormView
- subscribed to by BucketList

update button has been clicked:
- "FormView:item-updated"
- published by FormView
- subscribed to by BucketList

"mark complete" button has been clicked:
- "ItemView:item-completed"
- published by ItemView
- subscribed to by BucketList

delete button has been clicked:
- "ItemView:item-deleted"
- published by ItemView
- subscribed to by BucketList

Database: bucket_list
Collection: bucketlist

Connel and Kevin:
Client folder

Ally and Daniel:
Server folder
