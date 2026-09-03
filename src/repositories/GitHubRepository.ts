/**
 * Wichy
 * GitHub Repository Definition
 *
 * Based on:
 * - ARCHITECTURE.md
 * - API_SPEC.md
 * - TECH_STACK.md
 */

export class GitHubRepository {
  private baseUrl = "";

  public setBaseUrl(
    url: string
  ): void {
    this.baseUrl = url;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public async fetch(
    path: string
  ): Promise
