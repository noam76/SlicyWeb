/**
 * Wichy
 * Application Entry Point
 *
 * Central application coordinator.
 *
 * Responsibilities:
 * - Initialize core systems
 * - Manage startup sequence
 * - Manage shutdown sequence
 * - Expose application lifecycle
 *
 * This class should contain no business logic.
 */

import { Startup } from "./Startup";
import { Shutdown } from "./Shutdown";

export class Application {
  private readonly startup: Startup;
  private readonly shutdown: Shutdown;

  private initialized = false;
  private running = false;

  constructor() {
    this.startup = new Startup();
    this.shutdown = new Shutdown();
  }

  /**
   * Starts the application.
   */
  public async start(): Promise<void> {
    if (this.running) {
      return;
    }

    await this.startup.execute();

    this.initialized = true;
    this.running = true;
  }

  /**
   * Stops the application.
   */
  public async stop(): Promise<void> {
    if (!this.running) {
      return;
    }

    await this.shutdown.execute();

    this.running = false;
  }

  /**
   * Returns initialization state.
   */
  public isInitialized(): boolean {
    return this.initialized;
  }

  /**
   * Returns running state.
   */
  public isRunning(): boolean {
    return this.running;
  }
}
