import * as React from 'react';

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: any;
  state?: 'success' | 'error';
  message?: string;
  submitLabel: string;
};

export default ({ onSubmit, children, state, message, submitLabel }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      {children}
      {state === 'success' && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      {state === 'error' && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )}
      {submitLabel && (
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            {submitLabel}
          </button>
        </div>
      )}
    </form>
  );
};
