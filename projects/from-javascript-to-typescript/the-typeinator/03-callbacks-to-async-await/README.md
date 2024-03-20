# Step 3: Callbacks to Async Await

Your operational results are within the expected parameters.
Time for the last project.

The [`original.js`](./original.js) file contains the project's original code for `checkEmotion` and `speak` functions.

> 프로젝트에 [`original.js`](./original.js) 파일은 원본코드 `checkEmotion`, `speak` 함수를 포함합니다.

In this time period, those functions are written with traditional Node-style callback parameters.
Your job is to port that code to proper ES2017+ `async`/`await`.

> - 이번 시간에는 기존 함수를 전통적인 Node-style callback 매개변수로 작성합니다.
> - 당신이 할 일은 ES2017+ `async/await` 코드로 변환해야 합니다.

## Specification

In `index.js`, export two `async` functions:

- `checkEmotion`, based on the `checkEmotion` function in `original.js`
- `speak`, based on the `speak` function in `original.js`

## Files

- `index.js`: Write your `checkEmotion` and `speak` function here
- `index.test.js`: Tests verifying `checkEmotion` and `speak`
- `solution.js`: Solution code
