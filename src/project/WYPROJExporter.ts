// src/project/WYPROJExporter.ts

export interface WYPROJFile {
  format: "WYPROJ";
  version: string;
  project: Record<string, unknown>;
}

export interface ProjectSchema {
  projectId: string;
  projectName: string;
  projectFormat: "WYPROJ";
  createdAt: string;
  updatedAt: string;
  version: string;

  scene: Record<string, unknown>;
  settings: Record<string, unknown>;

  analysis: Record<string, unknown>;
  recommendations: Record<string, unknown>;

  preset: Record<string, unknown>;

  printer: Record<string, unknown>;
  material: Record<string, unknown>;
  filament: Record<string, unknown>;
}

export class WYPROJExporter {
  /**
   * Creates a valid WYPROJ container
   */
  public static create(project: ProjectSchema): WYPROJFile {
    return {
      format: "WYPROJ",
      version: project.version,
      project,
    };
  }

  /**
   * Converts a project into a formatted JSON string
   */
  public static serialize(project: ProjectSchema): string {
    const wyproj = this.create(project);

    return JSON.stringify(wyproj, null, 2);
  }

  /**
   * Creates a Blob ready for download
   */
  public static createBlob(project: ProjectSchema): Blob {
    const content = this.serialize(project);

    return new Blob([content], {
      type: "application/json",
    });
  }

  /**
   * Generates a file name using the project name
   */
  public static createFileName(project: ProjectSchema): string {
    const safeName = project.projectName
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_-]/g, "");

    return `${safeName || "project"}.wyproj`;
  }

  /**
   * Exports project content and metadata
   */
  public static export(project: ProjectSchema): {
    fileName: string;
    content: string;
  } {
    return {
      fileName: this.createFileName(project),
      content: this.serialize(project),
    };
  }
}

export default WYPROJExporter;
