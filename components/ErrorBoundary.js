"use client";

import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Surface it in the console so it's never silently blank.
    console.error("Netvly site error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "48px 24px",
            gap: 12,
          }}
        >
          <h2 style={{ margin: 0 }}>Something went wrong loading this page.</h2>
          <p style={{ color: "var(--muted)", maxWidth: 420 }}>
            Try reloading, or head back to the homepage. If this keeps happening, check the
            browser console for the error details.
          </p>
          <a href="/" className="btn-grad" style={{ marginTop: 8 }}>
            Go to homepage
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
