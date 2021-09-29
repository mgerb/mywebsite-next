import { Mutations } from "@/store";
import { fromEvent, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Vue } from "vue-class-component";

export abstract class ScrollerComponent extends Vue {
  private unsubscribe$ = new Subject();

  protected handleScrolling(): void {
    setTimeout(() => {
      // timeout needed to wait for content to render before setting scroll position
      window.scrollTo({ top: this.$store.state.scrollTop });

      // must set this after scrolling otherwise race condition occurs
      fromEvent(window, "scroll")
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          this.$store.commit(Mutations.SET_SCROLL_TOP, window.scrollY);
        });
    });
  }

  public unmounted(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
