import {PaginationComponent} from './pagination.component';
import {TestBed, ComponentFixture, inject} from '@angular/core/testing';
import {InputModule} from '../input';
import {IconModule} from '../icon';
import {ButtonModule} from '../button';
import {SelectModule} from '../select';
import {NgZone} from '@angular/core';

describe('PaginationCompoent', () => {
    let fixture: ComponentFixture<PaginationComponent>;
    let component: PaginationComponent;
    let zone: NgZone;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [InputModule, IconModule, ButtonModule, SelectModule],
            declarations: [PaginationComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
    });

    beforeEach(inject([NgZone], ngZone => (zone = ngZone)));

    describe('upon initialization', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });
        it('should initialize properly without errors', () => {
            expect(component).toBeTruthy();
        });
    });

    describe('.pageNumber', () => {
        describe('when there are 10 pages and `pageNumber` is set to 11', () => {
            beforeEach(done => {
                component.pageNumberChange.subscribe(done);

                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 11;
            });
            it('should be corrected to `10`', async () => {
                expect(component.pageNumber).toBe(10);
            });
        });
        describe('when there are 10 pages and `pageNumber` is set to 6', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 6;
            });
            it('should be `6`', () => {
                expect(component.pageNumber).toBe(6);
            });
        });
        describe('when there are 10 pages and and `pageNumber` is set to 1', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 1;
            });
            it('should be `1`', () => {
                expect(component.pageNumber).toBe(1);
            });
        });
        describe('when there are 10 pages and `pageNumber` is set to 10', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 10;
            });
            it('should be `10`', () => {
                expect(component.pageNumber).toBe(10);
            });
        });
        describe('when there are 10 pages and `pageNumber` is set to 0', () => {
            beforeEach(done => {
                component.pageNumberChange.subscribe(done);

                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 0;
            });
            it('should be `1`', () => {
                expect(component.pageNumber).toBe(1);
            });
        });
        describe('when there are 10 pages and `pageNumber` is set to -1', () => {
            beforeEach(done => {
                component.pageNumberChange.subscribe(done);

                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = -1;
            });
            it('should be `1`', () => {
                expect(component.pageNumber).toBe(1);
            });
        });
        describe('when === 1 and there are 10 pages and .previousPage() is called', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 1;
                component._previousPage();
            });
            it('should be `1`', () => {
                expect(component.pageNumber).toBe(1);
            });
        });
        describe('when === 2 and there are 10 pages and .previousPage() is called', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 2;
                component._previousPage();
            });
            it('should be `1`', () => {
                expect(component.pageNumber).toBe(1);
            });
        });
        describe('when === 3 and there are 10 pages and .previousPage() is called', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 3;
                component._previousPage();
            });
            it('should be `2`', () => {
                expect(component.pageNumber).toBe(2);
            });
        });
        describe('when === 10 and there are 10 pages and .nextPage() is called', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 10;
                component._nextPage();
            });
            it('should be `10`', () => {
                expect(component.pageNumber).toBe(10);
            });
        });
        describe('when === 9 and there are 10 pages and .nextPage() is called', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 9;
                component._nextPage();
            });
            it('should be `10`', () => {
                expect(component.pageNumber).toBe(10);
            });
        });
        describe('when === 8 and there are 10 pages and .nextPage() is called', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 8;
                component._nextPage();
            });
            it('should be `9`', () => {
                expect(component.pageNumber).toBe(9);
            });
        });
    });

    describe('.isFirstPage', () => {
        describe('when `pageNumber` is `1`', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 1;
            });
            it('should be `true`', () => {
                expect(component._isFirstPage).toBe(true);
            });
        });
        describe('when `pageNumber` is `2`', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 2;
            });
            it('should be `false`', () => {
                expect(component._isFirstPage).toBe(false);
            });
        });
        describe('when `pageNumber` is the last page', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 10;
            });
            it('should be `false`', () => {
                expect(component._isFirstPage).toBe(false);
            });
        });
    });
    describe('.isLastPage', () => {
        describe('when `pageNumber` is `1`', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 1;
            });
            it('should be `false`', () => {
                expect(component._isLastPage).toBe(false);
            });
        });
        describe('when `pageNumber` is the penultimate value', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 9;
            });
            it('should be `false`', () => {
                expect(component._isLastPage).toBe(false);
            });
        });
        describe('when `pageNumber` is the last page', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
                component.pageNumber = 10;
            });
            it('should be `true`', () => {
                expect(component._isLastPage).toBe(true);
            });
        });
    });

    describe('.visiblePages', () => {
        describe('when there are no pages', () => {
            beforeEach(() => {
                component.length = 0;
                component.pageSize = 10;
            });
            it('should be []', () => {
                expect(component._visiblePages).toEqual([]);
                expect(component._visiblePages.length).toBe(0);
            });
        });

        describe('when there is one page', () => {
            beforeEach(() => {
                component.length = 10;
                component.pageSize = 10;
            });
            it('should have a length of 1', () => {
                expect(component._visiblePages.length).toBe(1);
            });
            it('should be [1]', () => {
                expect(component._visiblePages).toEqual([1]);
            });
        });

        describe('when there are 8 pages', () => {
            beforeEach(() => {
                component.length = 80;
                component.pageSize = 10;
            });
            it('should have a length of 8', () => {
                expect(component._visiblePages.length).toBe(8);
            });
            it('should be [1, 2, 3, 4, 5, 6, 7, 8]', () => {
                expect(component._visiblePages).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
            });
        });

        describe('when there are 9 pages', () => {
            beforeEach(() => {
                component.length = 90;
                component.pageSize = 10;
            });
            it('should have a length of 9', () => {
                expect(component._visiblePages.length).toBe(9);
            });
            it('should be [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
                expect(component._visiblePages).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            });
        });

        describe('when there are 10 pages', () => {
            beforeEach(() => {
                component.length = 100;
                component.pageSize = 10;
            });
            describe('when pageNumber is 1', () => {
                beforeEach(() => {
                    component.pageNumber = 1;
                });
                it('should be [1, 2, 3, 4, 5, 6, ..., 9, 10]', () => {
                    expect(component._visiblePages).toEqual([1, 2, 3, 4, 5, 6, null, 9, 10]);
                });
            });
            describe('when pageNumber is 5', () => {
                beforeEach(() => {
                    component.pageNumber = 5;
                });
                it('should be [1, 2, 3, 4, 5, 6, ..., 9, 10]', () => {
                    expect(component._visiblePages).toEqual([1, 2, 3, 4, 5, 6, null, 9, 10]);
                });
            });
            describe('when pageNumber is 6', () => {
                beforeEach(() => {
                    component.pageNumber = 6;
                });
                it('should be [1, 2, ..., 5, 6, 7, 8, 9, 10]', () => {
                    expect(component._visiblePages).toEqual([1, 2, null, 5, 6, 7, 8, 9, 10]);
                });
            });
            describe('when pageNumber is 10', () => {
                beforeEach(() => {
                    component.pageNumber = 10;
                });
                it('should be [1, 2, ..., 5, 6, 7, 8, 9, 10]', () => {
                    expect(component._visiblePages).toEqual([1, 2, null, 5, 6, 7, 8, 9, 10]);
                });
            });
            afterEach(() => {
                expect(component._visiblePages.length).toBe(9);
            });
        });

        describe('when there are 16 pages', () => {
            beforeEach(() => {
                component.length = 160;
                component.pageSize = 10;
            });
            describe('when pageNumber is 1', () => {
                beforeEach(() => {
                    component.pageNumber = 1;
                });
                it('should be [1, 2, 3, 4, 5, 6, ..., 15, 16]', () => {
                    expect(component._visiblePages).toEqual([1, 2, 3, 4, 5, 6, null, 15, 16]);
                });
            });
            describe('when pageNumber is 5', () => {
                beforeEach(() => {
                    component.pageNumber = 5;
                });
                it('should be [1, 2, 3, 4, 5, 6, ..., 15, 16]', () => {
                    expect(component._visiblePages).toEqual([1, 2, 3, 4, 5, 6, null, 15, 16]);
                });
            });
            describe('when pageNumber is 6', () => {
                beforeEach(() => {
                    component.pageNumber = 6;
                });
                it('should be [1, 2, ..., 5, 6, 7, ..., 15, 16]', () => {
                    expect(component._visiblePages).toEqual([1, 2, null, 5, 6, 7, null, 15, 16]);
                });
            });
            describe('when pageNumber is 11', () => {
                beforeEach(() => {
                    component.pageNumber = 11;
                });
                it('should be [1, 2, ..., 10, 11, 12, ..., 15, 16]', () => {
                    expect(component._visiblePages).toEqual([1, 2, null, 10, 11, 12, null, 15, 16]);
                });
            });
            describe('when pageNumber is 12', () => {
                beforeEach(() => {
                    component.pageNumber = 12;
                });
                it('should be [1, 2, ..., 11, 12, 13, 14, 15, 16]', () => {
                    expect(component._visiblePages).toEqual([1, 2, null, 11, 12, 13, 14, 15, 16]);
                });
            });
            describe('when pageNumber is 16', () => {
                beforeEach(() => {
                    component.pageNumber = 16;
                });
                it('should be [1, 2, ..., 11, 12, 13, 14, 15, 16]', () => {
                    expect(component._visiblePages).toEqual([1, 2, null, 11, 12, 13, 14, 15, 16]);
                });
            });
            afterEach(() => {
                expect(component._visiblePages.length).toBe(9);
            });
        });
    });
    describe('.pageSize', () => {
        it('will update the total number of pages as expected', () => {
            component.length = 100;
            component.pageSize = 10;
            expect(component.totalPages).toEqual(10);

            component.pageSize = 50;
            expect(component.totalPages).toEqual(2);

            component.pageSize = 100;
            expect(component.totalPages).toEqual(1);

            component.pageSize = 200;
            expect(component.totalPages).toEqual(1);
        });
        describe('when set to zero and there are NO page size options', () => {
            it('will instead use default size of 20', () => {
                component.pageSizeOptions = [];
                component.pageSize = 0;
                expect(component.pageSize).toEqual(20);
            });
        });
        describe('when set to zero and there are page size options', () => {
            it('will instead use the first given page size option', () => {
                component.pageSizeOptions = [200, 10, 50];
                component.pageSize = 0;
                expect(component.pageSize).toEqual(200);
            });
        });
    });
    describe('._displayedPageSizeOptions', () => {
        it('is a numerically sorted version of `pageSizeOptions`', () => {
            component.pageSize = 10;
            component.pageSizeOptions = [200, 10, 50];
            expect(component._displayedPageSizeOptions[0]).toEqual(10);
            expect(component._displayedPageSizeOptions[1]).toEqual(50);
            expect(component._displayedPageSizeOptions[2]).toEqual(200);
        });
        describe('when `pageSize` is given a size that is not in the available options', () => {
            it('will select it and add it to `_displayedPageSizeOptions`', () => {
                component.pageSizeOptions = [200, 10, 50];
                component.pageSize = 30;
                expect(component.pageSize).toEqual(30);
                expect(component._displayedPageSizeOptions[0]).toEqual(10);
                expect(component._displayedPageSizeOptions[1]).toEqual(30);
                expect(component._displayedPageSizeOptions[2]).toEqual(50);
                expect(component._displayedPageSizeOptions[3]).toEqual(200);
            });
        });
    });
    describe('._changePageSize()', () => {
        it('will navigate pages as needed to keep whatever item is currently up top still on the page after the page size change', () => {
            component.length = 100;
            component.pageSize = 10;
            component.pageNumber = 2;
            component._changePageSize(5);
            expect(component.pageNumber).toEqual(3);
        });
    });
    describe('.collapsedVisiblePages', () => {
        describe('when there are no pages', () => {
            it('should be `[]`', () => {
                component.length = 0;
                component.pageSize = 10;
                expect(component._collapsedVisiblePages).toEqual([]);
                expect(component._collapsedVisiblePages.length).toBe(0);
            });
        });

        describe('when there is one page', () => {
            beforeEach(() => {
                component.length = 10;
                component.pageSize = 10;
            });
            it('should have a length of 1', () => {
                expect(component._collapsedVisiblePages.length).toBe(1);
            });
            it('should be [1]', () => {
                expect(component._collapsedVisiblePages).toEqual([1]);
            });
        });

        describe('when there are 4 pages', () => {
            beforeEach(() => {
                component.length = 40;
                component.pageSize = 10;
            });
            it('should have a length of 4', () => {
                expect(component._collapsedVisiblePages.length).toBe(4);
            });
            it('should be [1, 2, 3, 4]', () => {
                expect(component._collapsedVisiblePages).toEqual([1, 2, 3, 4]);
            });
        });

        describe('when there are 5 pages', () => {
            beforeEach(() => {
                component.length = 50;
                component.pageSize = 10;
            });
            it('should have a length of 5', () => {
                expect(component._collapsedVisiblePages.length).toBe(5);
            });
            it('should be [1, 2, 3, 4, 5]', () => {
                expect(component._collapsedVisiblePages).toEqual([1, 2, 3, 4, 5]);
            });
        });

        describe('when there are 6 pages', () => {
            beforeEach(() => {
                component.length = 60;
                component.pageSize = 10;
            });
            describe('when pageNumber is 1', () => {
                beforeEach(() => {
                    component.pageNumber = 1;
                });
                it('should be [1, 2, 3, ..., 6]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, 2, 3, null, 6]);
                });
            });
            describe('when pageNumber is 3', () => {
                beforeEach(() => {
                    component.pageNumber = 3;
                });
                it('should be [1, 2, 3, ..., 6]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, 2, 3, null, 6]);
                });
            });
            describe('when pageNumber is 4', () => {
                beforeEach(() => {
                    component.pageNumber = 4;
                });
                it('should be [1, ..., 4, 5, 6]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, null, 4, 5, 6]);
                });
            });
            describe('when pageNumber is 6', () => {
                beforeEach(() => {
                    component.pageNumber = 6;
                });
                it('should be [1, ..., 4, 5, 6]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, null, 4, 5, 6]);
                });
            });
            afterEach(() => {
                expect(component._collapsedVisiblePages.length).toBe(5);
            });
        });

        describe('when there are 16 pages', () => {
            beforeEach(() => {
                component.length = 160;
                component.pageSize = 10;
            });
            describe('when pageNumber is 1', () => {
                beforeEach(() => {
                    component.pageNumber = 1;
                });
                it('should be [1, 2, 3, ..., 16]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, 2, 3, null, 16]);
                });
            });
            describe('when pageNumber is 3', () => {
                beforeEach(() => {
                    component.pageNumber = 3;
                });
                it('should be [1, 2, 3, ..., 16]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, 2, 3, null, 16]);
                });
            });
            describe('when pageNumber is 4', () => {
                beforeEach(() => {
                    component.pageNumber = 4;
                });
                it('should be [1, ..., 4, ..., 16]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, null, 4, null, 16]);
                });
            });
            describe('when pageNumber is 13', () => {
                beforeEach(() => {
                    component.pageNumber = 13;
                });
                it('should be [1, ..., 13, ..., 16]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, null, 13, null, 16]);
                });
            });
            describe('when pageNumber is 14', () => {
                beforeEach(() => {
                    component.pageNumber = 14;
                });
                it('should be [1, ..., 14, 15, 16]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, null, 14, 15, 16]);
                });
            });
            describe('when pageNumber is 16', () => {
                beforeEach(() => {
                    component.pageNumber = 16;
                });
                it('should be [1, ..., 14, 15, 16]', () => {
                    expect(component._collapsedVisiblePages).toEqual([1, null, 14, 15, 16]);
                });
            });
            afterEach(() => {
                expect(component._collapsedVisiblePages.length).toBe(5, 'the number of pages items returned must be exactly 5.');
            });
        });
    });
});
