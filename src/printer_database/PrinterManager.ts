/**
 * Wichy
 * Printer Manager Definition
 *
 * Based on:
 * - ARCHITECTURE.md
 * - DATA_SCHEMA.md
 * - PRINTER_PROFILE_SPEC.md
 */

import type { Printer } from "../types/Printer";

import { PrinterRepository } from "./PrinterRepository";

export class PrinterManager {
  private readonly repository =
    new PrinterRepository();

  public addPrinter(
    printer: Printer,
  ): void {
    this.repository.add(printer);
  }

  public removePrinter(
    printerId: string,
  ): boolean {
    return this.repository.remove(
      printerId,
    );
  }

  public getPrinter(
    printerId: string,
  ): Printer | undefined {
    return this.repository.get(
      printerId,
    );
  }

  public getPrinters(): Printer[] {
    return this.repository.getAll();
  }

  public hasPrinter(
    printerId: string,
  ): boolean {
    return this.repository.exists(
      printerId,
    );
  }

  public getPrinterCount(): number {
    return this.repository.getCount();
  }

  public clear(): void {
    this.repository.clear();
  }
}
