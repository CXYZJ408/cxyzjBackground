let axios = require('./axios')
axios.setToken('eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiI0OTUyOTIyOTg4Njc3NjkzNDQiLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNTQzOTMwOTU0LCJpYXQiOjE1NDMzMjYxNTQsImlzcyI6ImN4eXpqIiwic3ViIjoiVG9rZW4iLCJhdWQiOiJVc2VyIiwianRpIjoiMzA5NjA3YzctNTA3YS00MTMyLWJlMjItZmFhY2YzNzU0OTVmIn0.ULztCh1G_MNWtmKrUpXYS2dRF2YG0e-nBScMeseb2r06lQ31BqypV7InBZV0o2idPp4cLtfjKfKgGQZJ37ih0w')
console.log(axios.get('/v1/article', { page_num: 0 }))
