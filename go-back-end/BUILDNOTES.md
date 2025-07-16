# building/cross compiling  

CGO_ENBLED=0 GOOS=linux GOARCH=amd64 go build -o movieCatalog ./cmd/api  
  
## database backup  

pg_dump --if-exists --clean --create --inserts --no-owner -h localhost -p 5432 -U postgres movies > movies.sql  

## database restore  

psql -h localhost -U postgres -d db name -f some file created with pg_dump
