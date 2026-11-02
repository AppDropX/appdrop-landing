import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches render errors below it, notably a lazy route chunk that failed to
 * load and wasn't fixed by the automatic reload in main.tsx (e.g. offline),
 * and shows a recoverable message instead of a blank page.
 */
class RouteErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Route failed to render:", error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div role="alert" className="flex min-h-dvh items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="mb-3 text-2xl font-bold text-foreground">Something went wrong</h1>
          <p className="mb-6 text-muted-foreground">
            This page didn&apos;t load properly. Check your connection and reload to try again.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-full bg-primary px-6 py-2.5 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Reload page
            </button>
            <a href="/" className="text-primary underline hover:text-primary/90">
              Go to home
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RouteErrorBoundary;
