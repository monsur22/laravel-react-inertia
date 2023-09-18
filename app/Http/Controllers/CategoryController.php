<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all(); // Fetch all categories
        return Inertia::render('Category/Category', ['categories' => $categories]);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|unique:categories|max:255',
        ]);

        Category::create($validatedData); // Create a new category
        return Redirect::route('category.index');
    }
    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        $category = Category::findOrFail($id); // Find category by ID
        return view('categories.show', compact('category'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {

    return Inertia::render('Category/Edit', ['category_edit' => $category]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $category->update([
            'title' => $request->title
        ]);
        return Redirect::route('category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return Redirect::route('category.index');
    }

}
