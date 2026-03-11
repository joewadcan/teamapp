#!/bin/bash
# Start backend server
cd server && node server.js &
# Start frontend dev server
cd client && npm run dev
