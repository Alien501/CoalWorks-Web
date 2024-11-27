import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false 
    };
  }

  // Static method to catch errors in child components
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI
    return { 
      hasError: true,
      error 
    };
  }

  // Lifecycle method to log error information
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service
    console.error('Uncaught error:', error, errorInfo);
    
    // Optional: Send error to monitoring service
    // errorTrackingService.report(error, errorInfo);
    
    this.setState({ 
      errorInfo 
    });
  }

  // Method to reset error state (optional)
  resetErrorBoundary = () => {
    this.setState({ 
      hasError: false,
      error: undefined,
      errorInfo: undefined 
    });
  }

  render() {
    // If there's an error, render fallback UI
    if (this.state.hasError) {
      // Use custom fallback if provided, otherwise use default
      const FallbackComponent = this.props.fallback || (
        <div className="error-fallback flex flex-col items-center justify-center min-h-screen bg-red-50 p-4">
          <div className="error-content text-center max-w-md">
            <AlertTriangle className="mx-auto mb-4 text-red-500" size={64} />
            <h1 className="text-2xl font-bold text-red-600 mb-2">
              Something went wrong
            </h1>
            <p className="text-red-700 mb-4">
              We apologize for the inconvenience. Please try again later.
            </p>
            <button 
              onClick={this.resetErrorBoundary}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Try Again
            </button>
            {this.state.error && (
              <details className="mt-4 text-left bg-red-100 p-3 rounded">
                <summary className="cursor-pointer text-red-700">
                  Error Details
                </summary>
                <pre className="text-xs text-red-800 overflow-auto max-h-40">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );

      return FallbackComponent;
    }

    // If no error, render children normally
    return this.props.children;
  }
}

// Optional: Create a hook for functional components
function useErrorBoundary() {
  const [error, setError] = React.useState<Error | null>(null);

  const throwError = React.useCallback((err: Error) => {
    setError(err);
  }, []);

  if (error) {
    throw error;
  }

  return throwError;
}

export { ErrorBoundary, useErrorBoundary };