# React useEffect Hook Missing Dependency
This repository demonstrates a common error in React's `useEffect` hook: missing dependencies in the dependency array.  The code includes a component that increments a counter.  The `useEffect` hook logs a message on every render, which is inefficient and might lead to unexpected behavior, especially with expensive operations inside the effect. The solution shows how to correctly specify the dependencies to avoid unnecessary re-renders.

## Problem
The initial implementation has an incomplete dependency array in `useEffect`. This means the effect will run after every render, not just when `count` changes, leading to excessive logging.  This is a common performance and debugging issue.