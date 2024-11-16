// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// src/setupTests.js
class MockMutationObserver {
  constructor(callback) {
    this.callback = callback;
    this.observedNodes = new Map();
  }

  observe(node, config) {
    this.observedNodes.set(node, config);
  }

  disconnect() {
    this.observedNodes.clear();
  }

  takeRecords() {
    // Return an empty array or any records you want to simulate
    return [];
  }
}

global.MutationObserver = MockMutationObserver;
