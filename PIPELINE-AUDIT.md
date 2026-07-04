# Pipeline Audit

## Lint

**Purpose:** Checks code quality using ESLint.

**Issue:** No timeout configured.

**Fix:** Added a timeout of 10 minutes and kept it as the first job.

---

## Unit Tests

**Purpose:** Runs unit tests.

**Issue:** Runs in parallel with lint.

**Fix:** Added `needs: lint` so tests only run after lint succeeds.

---

## Build

**Purpose:** Builds the application.

**Issue:** Runs without waiting for lint and does not upload the build output.

**Fix:** Added `needs: lint` and uploaded the `dist/` directory as the `app-build` artifact.

---

## Integration Tests

**Purpose:** Runs integration tests using the built application.

**Issue:** Runs without waiting for build and cannot access the build output.

**Fix:** Added `needs: build` and downloaded the `app-build` artifact before running tests.

---

## Deploy Staging

**Purpose:** Deploys the application to the staging environment.

**Issue:** Runs on every branch and before all validations complete.

**Fix:** Added dependencies on unit tests and integration tests and restricted execution to the `main` branch.

---

## Deploy Production

**Purpose:** Deploys the application to production.

**Issue:** Runs on every branch without waiting for staging deployment.

**Fix:** Added dependency on the staging deployment and restricted execution to the `main` branch.

---

## Notify

**Purpose:** Sends a pipeline completion notification.

**Issue:** Does not run if an earlier job fails.

**Fix:** Added `if: always()` so it executes regardless of pipeline success or failure.