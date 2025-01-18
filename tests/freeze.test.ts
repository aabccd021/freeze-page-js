import { test } from "@playwright/test";
import { fromSteps } from "./util.ts";

test(...fromSteps(["gd", "ci_1", "cd", "ci_2"]));
test(...fromSteps(["gd", "ci_1", "cs", "ci_2"]));
test(...fromSteps(["gd", "ci_1", "gd", "ci_2"]));
test(...fromSteps(["gd", "ci_1", "gs", "ci_2"]));
test(...fromSteps(["gi_1", "cd", "ci_2"]));
test(...fromSteps(["gi_1", "cs", "bi_2"]));
test(...fromSteps(["gi_1", "cs", "ci_2", "bs", "bi_3"]));
test(...fromSteps(["gi_1", "cs", "ci_2", "bs", "ci_3", "bs", "bi_4"]));
test(...fromSteps(["gi_1", "cs", "ci_2", "cs", "bi_3"]));
test(...fromSteps(["gi_1", "cs", "ci_2", "cs", "ci_3", "cs", "bi_4"]));
test(...fromSteps(["gi_1", "gd", "ci_2"]));
test(...fromSteps(["gi_1", "gi_1"]));
test(...fromSteps(["gi_1", "gs", "ci_2"]));
test(
  ...fromSteps([
    "gs",
    "cd",
    "ci_1",
    "cd",
    "ci_2",
    "cd",
    "ci_3",
    "cd",
    "ci_4",
    "bd",
    "bd",
    "bd",
  ]),
);
test(
  ...fromSteps([
    "gs",
    "cd",
    "cs",
    "cd",
    "cs",
    "cd",
    "cs",
    "cd",
    "bs",
    "bd",
    "bd",
    "bd",
    "bd",
    "bd",
    "bd",
  ]),
);
test(...fromSteps(["gs", "ci_1", "bs", "ci_2", "bs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "bs", "ci_2", "cd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "bs", "ci_2", "cs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "bs", "ci_2", "gd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "bs", "ci_2", "gs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "cd", "ci_2", "bd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "cd", "ci_2", "cd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "cd", "ci_2", "cs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "cd", "ci_2", "gd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "cd", "ci_2", "gs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "cs", "ci_2", "bs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "cs", "ci_2", "cd", "ci_3", "gi_1"]));
test(
  ...fromSteps([
    "gs",
    "ci_1",
    "cs",
    "ci_2",
    "cs",
    "ci_3",
    "cs",
    "ci_4",
    "bs",
    "bi_5",
    "bi_5",
    "bi_6",
    "bi_6",
  ]),
);
test(...fromSteps(["gs", "ci_1", "cs", "ci_2", "cs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "cs", "ci_2", "gd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "cs", "ci_2", "gs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gd", "ci_2", "bd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gd", "ci_2", "cd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gd", "ci_2", "cs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gd", "ci_2", "gd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gd", "ci_2", "gs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gs", "ci_2", "bs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gs", "ci_2", "cd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gs", "ci_2", "cs", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gs", "ci_2", "gd", "ci_3", "gi_1"]));
test(...fromSteps(["gs", "ci_1", "gs", "ci_2", "gs", "ci_3", "gi_1"]));
