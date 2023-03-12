# composers.fyi

An interactive timeline of classical music composers built as a simple coding demonstration of how one can use React alongside a LAMP stack.

### Demo:

[https://www.composers.fyi](https://www.composers.fyi)

## Prerequisites

- [Apache](https://httpd.apache.org/)
- [MariaDB](https://mariadb.org/)
- [PHP 8.0 or newer](https://www.php.net/)
- [Node.js/npm](https://nodejs.org/en/) (for local development only)

## Setup tips

- For local frontend HMR development, add a virtualhost to your `httpd.conf` file to use the local Apache/php backend for API calls and static assets.
- `cd frontend` and `npm run install` to install up dependencies, and `npm run build`.
- Vite is configured to output the results of `npm run build` to the root directory.
- Apache serves the static index.html.
- php handles REST API traffic and requests to the database.
