export function getOrigId() {
   return Date.now() + Math.random().toString(36).substring(10);
}