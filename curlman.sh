#!/bin/bash

export API='http://localhost:5000/api'

curl -X DELETE $API/categories/1

# curl -X PUT -H 'Content-Type: application/json' \
# $API/categories/1 \
# -d @- << EOF 
# {
#     "name": "Food",
#     "targetBudget": 5000
# }
# EOF


# curl $API/categories
# curl $API/categories/1


# curl -X GET http://localhost:5000/api/transactions/1

# curl -X PUT -H 'Content-Type: application/json' \
# http://localhost:5000/api/transactions/1 \
# -d @- << EOF
# {
#     "amount": 1000,
#     "description": "Bigger better sandwiches",
#     "transactionType": "debit",
#     "categoryId": 1,
#     "accountId": 1
# }
# EOF

# curl -X PUT -H 'Content-Type: application/json' \
# http://localhost:5000/api/transactions/1 \
# -d @- << EOF
# {
#     "amount": 1000,
#     "description": "Bigger better sandwiches",
#     "transactionType": "debit",
#     "categoryId": 1,
#     "accountId": 1
# }
# EOF

# curl -X PUT -H 'Content-Type: application/json' \
# http://localhost:5000/api/transactions/1 \
# -d @- << EOF
# {
#     "amount": 1000,
#     "description": "Bigger better sandwiches",
#     "transactionType": "debit",
#     "categoryId": 1,
#     "accountId": 1
# }
# EOF

# curl -X PUT -H 'Content-Type: application/json' \
# http://localhost:5000/api/transactions/1 \
# -d @- << EOF
# {
#     "amount": 1000,
#     "description": "Bigger better sandwiches",
#     "transactionType": "debit",
#     "categoryId": 1,
#     "accountId": 1
# }
# EOF
