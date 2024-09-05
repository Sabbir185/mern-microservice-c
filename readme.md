#### Redis for cache

#### **Project run:**
- 1. To run local server, first install node_modules
```
yarn install
```
- 2. Now run this command
```
yarn start:dev
```

````
# Redis commands
````

- 1. get single key-value data, await client.get("key_name")
- 2. set a single key-value data, await client.set("key_name", "string_value")

- 3. get nested key-value data, await client.hGet("parent_key_name", "child_key_name", "string_value")
- 4. set nested key-value data, await client.hSet("parent_key_name", "child_key_name")

- 5. delete specific key-value data, await client.del("key_name")
- 6. clear or remove all cached data, await client.flushall()

- 6. get all keys, await client.keys()


```