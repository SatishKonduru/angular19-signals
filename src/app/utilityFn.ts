import { DestroyRef, inject } from "@angular/core";
import { interval } from "rxjs";

export function counter(){
  const destroyRef = inject(DestroyRef)
  const values = interval(1000).subscribe(console.log)
  destroyRef.onDestroy(() => values.unsubscribe())
  return values
}
