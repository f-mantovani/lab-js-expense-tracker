describe('Bonus', () => {
	describe('getTotal', () => {
		it('should be define', () => {
			const budget = new Budget();
			expect(budget.getTotal).toBeDefined();
		});

		it('should take 1 arguments', () => {
			const budget = new Budget();
			expect(budget.getTotal.length).toEqual(1);
		});

    it("should return 0 if there are no entries", () => {
      const budget = new Budget();
      expect(budget.getTotal('income')).toEqual(0);
    });

    it("should return 0 if there are no entries", () => {
      const budget = new Budget();
      expect(budget.getTotal('expense')).toEqual(0);
    });

    it("should return 0 if there are no entries", () => {
      const budget = new Budget();
      expect(budget.getTotal('expense')).toEqual(0);
    });

    it('should return the total expense of all "expense" entries', () => {
      const budget = new Budget();
      const expense1 = new Expense("2024-06-17", 100, "food", true);
      const expense2 = new Expense("2024-06-17", 200, "food", false);

      budget.addEntry(expense1);
      budget.addEntry(expense2);

      expect(budget.getTotal('expense')).toEqual(300);
    });

    it('should return the total expense of all "income" entries', () => {
      const budget = new Budget();

      const income = new Income("2024-06-17", 100, "food");
 
      budget.addEntry(income);
      expect(budget.getTotal('income')).toEqual(100);
    });

    it("should use the 'forEach()' method to iterate over the entries array", () => {
      const budget = new Budget();
      spyOn(budget.entries, "forEach").and.callThrough();
      budget.getTotal('income');
      expect(budget.entries.forEach).toHaveBeenCalled();
      expect(budget.entries.forEach).toHaveBeenCalledWith(
        jasmine.any(Function)
      );
    });
	});

	describe('getFormattedEntries', () => {
		it('should return positive and negative values', () => {
			const budget1 = new Budget();
			const income1 = new Income('2024-06-17', 200, 'food');
			const income2 = new Income('2024-06-17', 200, 'food');
			const expense1 = new Expense('2024-06-17', 100, 'food', true);
			const expense2 = new Expense('2024-06-17', 500, 'food', false);

			budget1.addEntry(income1);
			budget1.addEntry(income2);
			budget1.addEntry(expense1);
			budget1.addEntry(expense2);

			expect(budget1.getFormattedEntries()).toEqual([
				'2024-06-17 | food | +200 €',
				'2024-06-17 | food | +200 €',
				'2024-06-17 | food | -100 €',
				'2024-06-17 | food | -500 €',
			]);
		});

		it('should return positive values', () => {
			const budget1 = new Budget();
			const income1 = new Income('2024-06-17', 200, 'food');
			const income2 = new Income('2024-06-17', 200, 'food');

			budget1.addEntry(income1);
			budget1.addEntry(income2);

			expect(budget1.getFormattedEntries()).toEqual([
				'2024-06-17 | food | +200 €',
				'2024-06-17 | food | +200 €',
			]);
		});

		it('should return negative values', () => {
			const budget1 = new Budget();

			const expense1 = new Expense('2024-06-17', 100, 'food', true);
			const expense2 = new Expense('2024-06-17', 500, 'food', false);

			budget1.addEntry(expense1);
			budget1.addEntry(expense2);

			expect(budget1.getFormattedEntries()).toEqual([
				'2024-06-17 | food | -100 €',
				'2024-06-17 | food | -500 €',
			]);
		});
	});
});
