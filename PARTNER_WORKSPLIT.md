# Step 5 - Partner Work Split for Continuous Integration

## Overview
This document outlines how to split the CI setup work between partners for Step 5.

## Work Division

### Partner A Responsibilities:
1. **Test Creation & Setup**
   - Create unit tests for `snacks.ts` (✅ COMPLETED)
   - Create unit tests for `guests.ts` (✅ COMPLETED) 
   - Create unit tests for `music/list.ts` (✅ COMPLETED)
   - Verify all tests pass locally with `npm test`

2. **Package Configuration**
   - Set up `package.json` with test scripts (✅ COMPLETED)
   - Install Vitest and TypeScript dependencies (✅ COMPLETED)
   - Create `tsconfig.json` configuration (✅ COMPLETED)

### Partner B Responsibilities:
1. **GitHub Actions Workflow**
   - Create `.github/workflows/ci.yml` file (✅ COMPLETED)
   - Configure workflow to run on push/PR events
   - Set up Node.js 20 environment
   - Configure steps: checkout → setup-node → npm ci → tsc --noEmit → npm test

2. **CI Testing & Validation**
   - Push changes to GitHub repository
   - Monitor GitHub Actions tab for workflow execution
   - Verify green checkmarks for successful runs
   - Test the "break it and fix it" scenario

## Step-by-Step Collaboration:

### Phase 1: Initial Setup (Partner A)
- [x] Export arrays from source files for testing
- [x] Create comprehensive test files
- [x] Set up package.json and dependencies
- [x] Run local tests to verify everything works

### Phase 2: CI Pipeline (Partner B)
- [x] Create GitHub Actions workflow file
- [ ] Commit and push all changes to repository
- [ ] Verify CI runs automatically on push
- [ ] Check GitHub Actions tab for successful runs

### Phase 3: Break & Fix Testing (Both Partners)
- [ ] Partner A: Temporarily break a test (e.g., reduce snacks to 2 items)
- [ ] Partner B: Push the broken code and verify CI fails (red X)
- [ ] Partner A: Fix the test and push the fix
- [ ] Partner B: Verify CI passes again (green checkmark)

## Files Created/Modified:
- ✅ `package.json` - Package configuration with test scripts
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `src/snacks.test.ts` - Unit tests for snacks
- ✅ `src/guests.test.ts` - Unit tests for guests  
- ✅ `src/music/music.test.ts` - Unit tests for music
- ✅ `.github/workflows/ci.yml` - GitHub Actions workflow
- ✅ Modified `src/snacks.ts` - Exported snacks array
- ✅ Modified `src/guests.ts` - Exported guests array

## Next Steps:
1. **Commit and push all changes to GitHub**
2. **Navigate to GitHub Actions tab to watch the workflow run**
3. **Test the break-and-fix scenario together**
4. **Document the CI process and results**

## Key Learning Points:
- CI automatically tests code on every push/PR
- Tests catch bugs before they reach production
- Red CI = unsafe to merge, Green CI = safe to merge
- Automated testing builds confidence in code quality
