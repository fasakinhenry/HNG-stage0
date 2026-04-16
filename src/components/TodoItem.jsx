import { useState, useEffect } from 'react';

const TodoItem = () => {
  const [isDone, setIsDone] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({
    text: 'Calculating…',
    cls: 'due-far',
  });
  const [isDeleted, setIsDeleted] = useState(false);

  /* ── Due date ──────────────────────────────────── */
  const DUE = new Date('2026-04-19T23:59:00');

  /* Format due date nicely */
  const formattedDue = DUE.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  /* Compute friendly time-remaining string */
  function getTimeRemaining() {
    const now = Date.now();
    const diff = DUE.getTime() - now; // ms
    const absDiff = Math.abs(diff);

    const mins = Math.floor(absDiff / 60000);
    const hrs = Math.floor(absDiff / 3600000);
    const days = Math.floor(absDiff / 86400000);

    if (diff < 0) {
      // Overdue
      if (mins < 60)
        return {
          text: `Overdue by ${mins} min${mins !== 1 ? 's' : ''}`,
          cls: 'overdue',
        };
      if (hrs < 24)
        return {
          text: `Overdue by ${hrs} hr${hrs !== 1 ? 's' : ''}`,
          cls: 'overdue',
        };
      return {
        text: `Overdue by ${days} day${days !== 1 ? 's' : ''}`,
        cls: 'overdue',
      };
    }

    if (mins < 1) return { text: 'Due now!', cls: 'overdue' };
    if (mins < 60)
      return {
        text: `Due in ${mins} min${mins !== 1 ? 's' : ''}`,
        cls: 'due-soon',
      };
    if (hrs < 24)
      return {
        text: `Due in ${hrs} hr${hrs !== 1 ? 's' : ''}`,
        cls: 'due-soon',
      };
    if (days === 1) return { text: 'Due tomorrow', cls: 'due-soon' };
    return { text: `Due in ${days} days`, cls: 'due-far' };
  }

  useEffect(() => {
    setTimeRemaining(getTimeRemaining());
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  /* ── Edit / Delete ──────────────────────────────── */
  const handleEdit = () => {
    console.log('edit clicked');
    alert('Edit functionality not implemented yet!');
  };

  const handleDelete = () => {
    console.log('delete clicked');
    if (confirm('Delete this task?')) {
      setIsDeleted(true);
    }
  };
  if (isDeleted) return null;

  return (
    <main>
      <article
        data-testid='test-todo-card'
        className={isDone ? 'is-done' : ''}
        aria-label='Task: Redesign the onboarding flow'
      >
        {/* Corner decoration */}
        <span className='corner-dot' aria-hidden='true'></span>

        {/* Top row: priority + status */}
        <div className='card-top'>
          <span
            data-testid='test-todo-priority'
            className='priority-high'
            aria-label='Priority: High'
          >
            🔴 High
          </span>
          <strong
            data-testid='test-todo-status'
            aria-label={`Status: ${isDone ? 'Done' : 'In Progress'}`}
          >
            {isDone ? 'Done' : 'In Progress'}
          </strong>
        </div>

        {/* Checkbox + Title */}
        <div className='title-row'>
          <div className='checkbox-wrapper'>
            <input
              type='checkbox'
              id='todo-complete'
              data-testid='test-todo-complete-toggle'
              aria-label='Mark task as complete'
              checked={isDone}
              onChange={(e) => setIsDone(e.target.checked)}
            />
            <label htmlFor='todo-complete'>Mark as complete</label>
          </div>
          <h2 data-testid='test-todo-title'>Redesign the onboarding flow</h2>
        </div>

        {/* Description */}
        <p data-testid='test-todo-description'>
          Audit the current 7-step onboarding funnel, identify friction points,
          and deliver hi-fi mockups to the design system with updated copy and
          micro-interactions for mobile-first users.
        </p>

        <div className='divider' aria-hidden='true'></div>

        {/* Due date + time remaining */}
        <div className='date-row'>
          <div className='date-label'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 16 16'
              fill='none'
              aria-hidden='true'
            >
              <rect
                x='1'
                y='2'
                width='14'
                height='13'
                rx='2'
                stroke='currentColor'
                strokeWidth='1.5'
              />
              <path d='M1 6h14' stroke='currentColor' strokeWidth='1.5' />
              <path
                d='M5 1v2M11 1v2'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
            <time
              data-testid='test-todo-due-date'
              dateTime='2026-04-19T23:59:00'
            >
              Due {formattedDue}
            </time>
          </div>
          <time
            data-testid='test-todo-time-remaining'
            aria-live='polite'
            aria-label='Time remaining'
            dateTime='2026-04-19T23:59:00'
            className={timeRemaining.cls}
          >
            {timeRemaining.text}
          </time>
        </div>

        {/* Tags */}
        <ul
          data-testid='test-todo-tags'
          role='list'
          aria-label='Task categories'
        >
          <li data-testid='test-todo-tag-design'>Design</li>
          <li data-testid='test-todo-tag-urgent'>Urgent</li>
          <li data-testid='test-todo-tag-work'>Work</li>
        </ul>

        {/* Actions */}
        <div className='card-actions'>
          <button
            data-testid='test-todo-edit-button'
            aria-label='Edit task'
            onClick={handleEdit}
          >
            ✏️ Edit
          </button>
          <button
            data-testid='test-todo-delete-button'
            aria-label='Delete task'
            onClick={handleDelete}
          >
            🗑 Delete
          </button>
        </div>
      </article>
    </main>
  );
};

export default TodoItem;
