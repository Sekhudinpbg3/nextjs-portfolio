type FileName = "cv";
type PublicFile = {
  name: string;
  url: string;
};

function file(fl: string, name?: string): PublicFile {
  return {
    name: name || "file",
    url: `/file/${fl}`,
  };
}

export class Public {
  static file: Record<FileName, PublicFile> = {
    cv: file("cv_sekhudin.pdf", "cv_sekhudin"),
  };
}
