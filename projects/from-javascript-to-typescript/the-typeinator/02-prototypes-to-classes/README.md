# Step 2: Prototypes to Classes

The next project for you to overhaul hails from before the time of `class` syntax.
How primitive.

> `class` 구문이 등장하기 이전의 프로젝트를 점검해야 합니다. 얼마나 원시적인가요?(레거시)

The [`original.js`](./original.js) file contains the project's original code for `Robot` and `Humanoid` functions used as classes.
Your job is to port that code to proper ES2015+ `class` classes.

> [`original.js`](./original.js) 파일에 프로젝트의 원본코드(함수) `Robot`와 `Humanoid`가 있습니다. 당신이 할 일은 코드를 ES2015+ `class`로 변환해야 합니다.

## Specification

In `index.js`, export two classes using ES2015 `class` syntax:

- `Robot`, based on the `Robot` function in `original.js`
- `Humanoid`, extending the `Robot` class, based on the `Humanoid` function in `original.js`

## Files

- `index.js`: Write your `Robot` and `Humanoid` functions here
- `index.test.js`: Tests verifying `Robot` and `Humanoid`
- `solution.js`: Solution code

```javascript
const { Robot, Humanoid } = process.env.TEST_SOLUTIONS
	? require("./solution")
	: require("./index");
```

소스가 정상적으로 작동하지 않는다. `solution`에 작성된 코드와 완전히 일치해야 테스트를 통과할 수 있는 듯하다.
