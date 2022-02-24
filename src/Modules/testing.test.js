/**
 * @jest-environment jsdom
 */

import {
  UpdateTask, saveUpdatedTask, UpdateStatus, clearAll,
} from './testing.js';

describe('Testing Clear All Completed', () => {
  const list = [
    {
      description: 'task1',
      completed: true,
      index: 1,
    },
    {
      description: 'task2',
      completed: false,
      index: 2,
    },
  ];

  test('lenght 1 ', () => {
    expect(clearAll(list).length).toBe(1);
  });

  test('lenght 0', () => {
    const list1 = [
      {
        description: 'task1',
        completed: true,
        index: 1,
      }];
    expect(clearAll(list1).length).toBe(0);
  });

  test('index', () => {
    expect(clearAll(list)[0].index).toBe(1);
  });
});

describe('test update status', () => {
  test('update', () => {
    document.body.innerHTML = '<div>'
      + '<input type="checkbox" class="checkbox" id="box-1">'
      + '  <span class="span" id="span" />'
      + '</div>';

    const list = [
      {
        description: 'task1',
        completed: false,
        index: 1,
      }];
    const box = document.querySelector('.checkbox');
    const span = document.querySelector('.span');
    box.addEventListener('change', (e) => {
      UpdateStatus(e, list);
    });
    const event = new Event('change');
    box.dispatchEvent(event);
    expect(span.getAttribute('class')).toBe('span done');
  });
});

describe('test update task', () => {
  test('edit', () => {
    document.body.innerHTML = '<div class="div">'
      + '  <span class="span" id="span" />'
      + '</div>';

    const span = document.querySelector('.span');
    span.addEventListener('dblclick', (e) => {
      UpdateTask(e);
    });
    const event = new Event('dblclick');
    span.dispatchEvent(event);
    expect(document.querySelector('.edit')).toBeTruthy();
  });
});

describe('test save update task', () => {
  test('save update', () => {
    document.body.innerHTML = '<div class="div">'
      + '  <input class="edit" type="text"  />'
      + '</div>';

    const div = document.querySelector('.div');
    const input = document.querySelector('.edit');
    input.addEventListener('click', () => {
      saveUpdatedTask('task', div, input);
    });
    const event = new Event('click');
    input.dispatchEvent(event);
    expect(document.querySelector('.edit')).toBeFalsy();
  });
});