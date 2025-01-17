```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when count changes
    console.log('Effect running:', count);
    return () => {
      console.log('Cleanup function running');
    };
  }, [count]); // Add count to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```